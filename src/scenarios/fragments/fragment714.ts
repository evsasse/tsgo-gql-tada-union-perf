import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken712 } from "./fragment712";
import type { FragmentToken713 } from "./fragment713";

export const FRAGMENT_714 = gql(`
  fragment Fragment714 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult714 = ResultOf<typeof FRAGMENT_714>;
type FragmentSelf714 = NonNullable<FragmentResult714>;

export type FragmentToken714 =
  | FragmentSelf714["__typename"]
  | FragmentSelf714["typenameHint"] | FragmentToken712 | FragmentToken713;
