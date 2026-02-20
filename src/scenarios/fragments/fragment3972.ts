import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3970 } from "./fragment3970";
import type { FragmentToken3971 } from "./fragment3971";

export const FRAGMENT_3972 = gql(`
  fragment Fragment3972 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult3972 = ResultOf<typeof FRAGMENT_3972>;
type FragmentSelf3972 = NonNullable<FragmentResult3972>;

export type FragmentToken3972 =
  | FragmentSelf3972["__typename"]
  | FragmentSelf3972["typenameHint"] | FragmentToken3970 | FragmentToken3971;
