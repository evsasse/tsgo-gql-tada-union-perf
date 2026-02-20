import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken737 } from "./fragment737";
import type { FragmentToken738 } from "./fragment738";

export const FRAGMENT_739 = gql(`
  fragment Fragment739 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult739 = ResultOf<typeof FRAGMENT_739>;
type FragmentSelf739 = NonNullable<FragmentResult739>;

export type FragmentToken739 =
  | FragmentSelf739["__typename"]
  | FragmentSelf739["typenameHint"] | FragmentToken737 | FragmentToken738;
