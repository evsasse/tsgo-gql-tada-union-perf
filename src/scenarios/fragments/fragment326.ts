import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken324 } from "./fragment324";
import type { FragmentToken325 } from "./fragment325";

export const FRAGMENT_326 = gql(`
  fragment Fragment326 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult326 = ResultOf<typeof FRAGMENT_326>;
type FragmentSelf326 = NonNullable<FragmentResult326>;

export type FragmentToken326 =
  | FragmentSelf326["__typename"]
  | FragmentSelf326["typenameHint"] | FragmentToken324 | FragmentToken325;
