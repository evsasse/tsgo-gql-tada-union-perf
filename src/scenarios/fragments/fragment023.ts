import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken021 } from "./fragment021";
import type { FragmentToken022 } from "./fragment022";

export const FRAGMENT_023 = gql(`
  fragment Fragment023 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult023 = ResultOf<typeof FRAGMENT_023>;
type FragmentSelf023 = NonNullable<FragmentResult023>;

export type FragmentToken023 =
  | FragmentSelf023["__typename"]
  | FragmentSelf023["typenameHint"] | FragmentToken021 | FragmentToken022;
