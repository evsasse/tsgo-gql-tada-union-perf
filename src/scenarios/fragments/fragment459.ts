import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken457 } from "./fragment457";
import type { FragmentToken458 } from "./fragment458";

export const FRAGMENT_459 = gql(`
  fragment Fragment459 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult459 = ResultOf<typeof FRAGMENT_459>;
type FragmentSelf459 = NonNullable<FragmentResult459>;

export type FragmentToken459 =
  | FragmentSelf459["__typename"]
  | FragmentSelf459["typenameHint"] | FragmentToken457 | FragmentToken458;
