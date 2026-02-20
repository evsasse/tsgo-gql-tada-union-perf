import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken920 } from "./fragment920";
import type { FragmentToken921 } from "./fragment921";

export const FRAGMENT_922 = gql(`
  fragment Fragment922 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult922 = ResultOf<typeof FRAGMENT_922>;
type FragmentSelf922 = NonNullable<FragmentResult922>;

export type FragmentToken922 =
  | FragmentSelf922["__typename"]
  | FragmentSelf922["typenameHint"] | FragmentToken920 | FragmentToken921;
