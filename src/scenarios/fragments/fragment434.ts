import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken432 } from "./fragment432";
import type { FragmentToken433 } from "./fragment433";

export const FRAGMENT_434 = gql(`
  fragment Fragment434 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult434 = ResultOf<typeof FRAGMENT_434>;
type FragmentSelf434 = NonNullable<FragmentResult434>;

export type FragmentToken434 =
  | FragmentSelf434["__typename"]
  | FragmentSelf434["typenameHint"] | FragmentToken432 | FragmentToken433;
