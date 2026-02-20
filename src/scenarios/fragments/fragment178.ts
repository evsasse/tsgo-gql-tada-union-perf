import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken176 } from "./fragment176";
import type { FragmentToken177 } from "./fragment177";

export const FRAGMENT_178 = gql(`
  fragment Fragment178 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult178 = ResultOf<typeof FRAGMENT_178>;
type FragmentSelf178 = NonNullable<FragmentResult178>;

export type FragmentToken178 =
  | FragmentSelf178["__typename"]
  | FragmentSelf178["typenameHint"] | FragmentToken176 | FragmentToken177;
