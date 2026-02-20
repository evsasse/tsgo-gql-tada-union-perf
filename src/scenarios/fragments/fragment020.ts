import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken018 } from "./fragment018";
import type { FragmentToken019 } from "./fragment019";

export const FRAGMENT_020 = gql(`
  fragment Fragment020 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult020 = ResultOf<typeof FRAGMENT_020>;
type FragmentSelf020 = NonNullable<FragmentResult020>;

export type FragmentToken020 =
  | FragmentSelf020["__typename"]
  | FragmentSelf020["typenameHint"] | FragmentToken018 | FragmentToken019;
