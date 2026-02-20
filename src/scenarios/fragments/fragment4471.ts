import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4469 } from "./fragment4469";
import type { FragmentToken4470 } from "./fragment4470";

export const FRAGMENT_4471 = gql(`
  fragment Fragment4471 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult4471 = ResultOf<typeof FRAGMENT_4471>;
type FragmentSelf4471 = NonNullable<FragmentResult4471>;

export type FragmentToken4471 =
  | FragmentSelf4471["__typename"]
  | FragmentSelf4471["typenameHint"] | FragmentToken4469 | FragmentToken4470;
