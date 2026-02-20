import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken683 } from "./fragment683";
import type { FragmentToken684 } from "./fragment684";

export const FRAGMENT_685 = gql(`
  fragment Fragment685 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult685 = ResultOf<typeof FRAGMENT_685>;
type FragmentSelf685 = NonNullable<FragmentResult685>;

export type FragmentToken685 =
  | FragmentSelf685["__typename"]
  | FragmentSelf685["typenameHint"] | FragmentToken683 | FragmentToken684;
