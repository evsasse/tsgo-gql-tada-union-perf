import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4327 } from "./fragment4327";
import type { FragmentToken4328 } from "./fragment4328";

export const FRAGMENT_4329 = gql(`
  fragment Fragment4329 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult4329 = ResultOf<typeof FRAGMENT_4329>;
type FragmentSelf4329 = NonNullable<FragmentResult4329>;

export type FragmentToken4329 =
  | FragmentSelf4329["__typename"]
  | FragmentSelf4329["typenameHint"] | FragmentToken4327 | FragmentToken4328;
