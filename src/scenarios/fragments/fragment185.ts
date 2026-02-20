import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken183 } from "./fragment183";
import type { FragmentToken184 } from "./fragment184";

export const FRAGMENT_185 = gql(`
  fragment Fragment185 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult185 = ResultOf<typeof FRAGMENT_185>;
type FragmentSelf185 = NonNullable<FragmentResult185>;

export type FragmentToken185 =
  | FragmentSelf185["__typename"]
  | FragmentSelf185["typenameHint"] | FragmentToken183 | FragmentToken184;
