import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3120 } from "./fragment3120";
import type { FragmentToken3121 } from "./fragment3121";

export const FRAGMENT_3122 = gql(`
  fragment Fragment3122 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult3122 = ResultOf<typeof FRAGMENT_3122>;
type FragmentSelf3122 = NonNullable<FragmentResult3122>;

export type FragmentToken3122 =
  | FragmentSelf3122["__typename"]
  | FragmentSelf3122["typenameHint"] | FragmentToken3120 | FragmentToken3121;
