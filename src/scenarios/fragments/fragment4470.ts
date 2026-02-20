import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4468 } from "./fragment4468";
import type { FragmentToken4469 } from "./fragment4469";

export const FRAGMENT_4470 = gql(`
  fragment Fragment4470 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult4470 = ResultOf<typeof FRAGMENT_4470>;
type FragmentSelf4470 = NonNullable<FragmentResult4470>;

export type FragmentToken4470 =
  | FragmentSelf4470["__typename"]
  | FragmentSelf4470["typenameHint"] | FragmentToken4468 | FragmentToken4469;
