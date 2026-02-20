import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1507 } from "./fragment1507";
import type { FragmentToken1508 } from "./fragment1508";

export const FRAGMENT_1509 = gql(`
  fragment Fragment1509 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult1509 = ResultOf<typeof FRAGMENT_1509>;
type FragmentSelf1509 = NonNullable<FragmentResult1509>;

export type FragmentToken1509 =
  | FragmentSelf1509["__typename"]
  | FragmentSelf1509["typenameHint"] | FragmentToken1507 | FragmentToken1508;
