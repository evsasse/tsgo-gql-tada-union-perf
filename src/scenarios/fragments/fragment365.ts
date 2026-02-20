import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken363 } from "./fragment363";
import type { FragmentToken364 } from "./fragment364";

export const FRAGMENT_365 = gql(`
  fragment Fragment365 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult365 = ResultOf<typeof FRAGMENT_365>;
type FragmentSelf365 = NonNullable<FragmentResult365>;

export type FragmentToken365 =
  | FragmentSelf365["__typename"]
  | FragmentSelf365["typenameHint"] | FragmentToken363 | FragmentToken364;
