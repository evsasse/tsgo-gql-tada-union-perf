import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4479 } from "./fragment4479";
import type { FragmentToken4480 } from "./fragment4480";

export const FRAGMENT_4481 = gql(`
  fragment Fragment4481 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult4481 = ResultOf<typeof FRAGMENT_4481>;
type FragmentSelf4481 = NonNullable<FragmentResult4481>;

export type FragmentToken4481 =
  | FragmentSelf4481["__typename"]
  | FragmentSelf4481["typenameHint"] | FragmentToken4479 | FragmentToken4480;
