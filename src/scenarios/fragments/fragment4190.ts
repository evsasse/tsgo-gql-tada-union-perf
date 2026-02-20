import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4188 } from "./fragment4188";
import type { FragmentToken4189 } from "./fragment4189";

export const FRAGMENT_4190 = gql(`
  fragment Fragment4190 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult4190 = ResultOf<typeof FRAGMENT_4190>;
type FragmentSelf4190 = NonNullable<FragmentResult4190>;

export type FragmentToken4190 =
  | FragmentSelf4190["__typename"]
  | FragmentSelf4190["typenameHint"] | FragmentToken4188 | FragmentToken4189;
