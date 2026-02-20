import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3921 } from "./fragment3921";
import type { FragmentToken3922 } from "./fragment3922";

export const FRAGMENT_3923 = gql(`
  fragment Fragment3923 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult3923 = ResultOf<typeof FRAGMENT_3923>;
type FragmentSelf3923 = NonNullable<FragmentResult3923>;

export type FragmentToken3923 =
  | FragmentSelf3923["__typename"]
  | FragmentSelf3923["typenameHint"] | FragmentToken3921 | FragmentToken3922;
