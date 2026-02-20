import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken019 } from "./fragment019";
import type { FragmentToken020 } from "./fragment020";

export const FRAGMENT_021 = gql(`
  fragment Fragment021 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult021 = ResultOf<typeof FRAGMENT_021>;
type FragmentSelf021 = NonNullable<FragmentResult021>;

export type FragmentToken021 =
  | FragmentSelf021["__typename"]
  | FragmentSelf021["typenameHint"] | FragmentToken019 | FragmentToken020;
