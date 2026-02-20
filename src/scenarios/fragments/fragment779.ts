import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken777 } from "./fragment777";
import type { FragmentToken778 } from "./fragment778";

export const FRAGMENT_779 = gql(`
  fragment Fragment779 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult779 = ResultOf<typeof FRAGMENT_779>;
type FragmentSelf779 = NonNullable<FragmentResult779>;

export type FragmentToken779 =
  | FragmentSelf779["__typename"]
  | FragmentSelf779["typenameHint"] | FragmentToken777 | FragmentToken778;
