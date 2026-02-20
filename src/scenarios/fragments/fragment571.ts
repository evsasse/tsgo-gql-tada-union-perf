import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken569 } from "./fragment569";
import type { FragmentToken570 } from "./fragment570";

export const FRAGMENT_571 = gql(`
  fragment Fragment571 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult571 = ResultOf<typeof FRAGMENT_571>;
type FragmentSelf571 = NonNullable<FragmentResult571>;

export type FragmentToken571 =
  | FragmentSelf571["__typename"]
  | FragmentSelf571["typenameHint"] | FragmentToken569 | FragmentToken570;
