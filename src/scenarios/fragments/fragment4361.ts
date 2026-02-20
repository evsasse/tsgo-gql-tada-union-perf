import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4359 } from "./fragment4359";
import type { FragmentToken4360 } from "./fragment4360";

export const FRAGMENT_4361 = gql(`
  fragment Fragment4361 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult4361 = ResultOf<typeof FRAGMENT_4361>;
type FragmentSelf4361 = NonNullable<FragmentResult4361>;

export type FragmentToken4361 =
  | FragmentSelf4361["__typename"]
  | FragmentSelf4361["typenameHint"] | FragmentToken4359 | FragmentToken4360;
