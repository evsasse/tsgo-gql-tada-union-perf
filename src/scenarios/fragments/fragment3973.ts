import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3971 } from "./fragment3971";
import type { FragmentToken3972 } from "./fragment3972";

export const FRAGMENT_3973 = gql(`
  fragment Fragment3973 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult3973 = ResultOf<typeof FRAGMENT_3973>;
type FragmentSelf3973 = NonNullable<FragmentResult3973>;

export type FragmentToken3973 =
  | FragmentSelf3973["__typename"]
  | FragmentSelf3973["typenameHint"] | FragmentToken3971 | FragmentToken3972;
