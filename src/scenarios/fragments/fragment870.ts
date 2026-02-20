import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken868 } from "./fragment868";
import type { FragmentToken869 } from "./fragment869";

export const FRAGMENT_870 = gql(`
  fragment Fragment870 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult870 = ResultOf<typeof FRAGMENT_870>;
type FragmentSelf870 = NonNullable<FragmentResult870>;

export type FragmentToken870 =
  | FragmentSelf870["__typename"]
  | FragmentSelf870["typenameHint"] | FragmentToken868 | FragmentToken869;
