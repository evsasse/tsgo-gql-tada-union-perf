import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken776 } from "./fragment776";
import type { FragmentToken777 } from "./fragment777";

export const FRAGMENT_778 = gql(`
  fragment Fragment778 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult778 = ResultOf<typeof FRAGMENT_778>;
type FragmentSelf778 = NonNullable<FragmentResult778>;

export type FragmentToken778 =
  | FragmentSelf778["__typename"]
  | FragmentSelf778["typenameHint"] | FragmentToken776 | FragmentToken777;
