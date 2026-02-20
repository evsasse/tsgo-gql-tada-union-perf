import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken022 } from "./fragment022";
import type { FragmentToken023 } from "./fragment023";

export const FRAGMENT_024 = gql(`
  fragment Fragment024 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult024 = ResultOf<typeof FRAGMENT_024>;
type FragmentSelf024 = NonNullable<FragmentResult024>;

export type FragmentToken024 =
  | FragmentSelf024["__typename"]
  | FragmentSelf024["typenameHint"] | FragmentToken022 | FragmentToken023;
