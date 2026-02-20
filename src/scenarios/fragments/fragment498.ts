import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken496 } from "./fragment496";
import type { FragmentToken497 } from "./fragment497";

export const FRAGMENT_498 = gql(`
  fragment Fragment498 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult498 = ResultOf<typeof FRAGMENT_498>;
type FragmentSelf498 = NonNullable<FragmentResult498>;

export type FragmentToken498 =
  | FragmentSelf498["__typename"]
  | FragmentSelf498["typenameHint"] | FragmentToken496 | FragmentToken497;
