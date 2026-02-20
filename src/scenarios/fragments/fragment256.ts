import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken254 } from "./fragment254";
import type { FragmentToken255 } from "./fragment255";

export const FRAGMENT_256 = gql(`
  fragment Fragment256 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult256 = ResultOf<typeof FRAGMENT_256>;
type FragmentSelf256 = NonNullable<FragmentResult256>;

export type FragmentToken256 =
  | FragmentSelf256["__typename"]
  | FragmentSelf256["typenameHint"] | FragmentToken254 | FragmentToken255;
