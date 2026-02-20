import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken253 } from "./fragment253";
import type { FragmentToken254 } from "./fragment254";

export const FRAGMENT_255 = gql(`
  fragment Fragment255 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult255 = ResultOf<typeof FRAGMENT_255>;
type FragmentSelf255 = NonNullable<FragmentResult255>;

export type FragmentToken255 =
  | FragmentSelf255["__typename"]
  | FragmentSelf255["typenameHint"] | FragmentToken253 | FragmentToken254;
