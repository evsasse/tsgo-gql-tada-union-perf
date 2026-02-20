import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken268 } from "./fragment268";
import type { FragmentToken269 } from "./fragment269";

export const FRAGMENT_270 = gql(`
  fragment Fragment270 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult270 = ResultOf<typeof FRAGMENT_270>;
type FragmentSelf270 = NonNullable<FragmentResult270>;

export type FragmentToken270 =
  | FragmentSelf270["__typename"]
  | FragmentSelf270["typenameHint"] | FragmentToken268 | FragmentToken269;
