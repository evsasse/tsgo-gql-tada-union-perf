import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken965 } from "./fragment965";
import type { FragmentToken966 } from "./fragment966";

export const FRAGMENT_967 = gql(`
  fragment Fragment967 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult967 = ResultOf<typeof FRAGMENT_967>;
type FragmentSelf967 = NonNullable<FragmentResult967>;

export type FragmentToken967 =
  | FragmentSelf967["__typename"]
  | FragmentSelf967["typenameHint"] | FragmentToken965 | FragmentToken966;
