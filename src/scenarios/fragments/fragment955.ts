import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken953 } from "./fragment953";
import type { FragmentToken954 } from "./fragment954";

export const FRAGMENT_955 = gql(`
  fragment Fragment955 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult955 = ResultOf<typeof FRAGMENT_955>;
type FragmentSelf955 = NonNullable<FragmentResult955>;

export type FragmentToken955 =
  | FragmentSelf955["__typename"]
  | FragmentSelf955["typenameHint"] | FragmentToken953 | FragmentToken954;
