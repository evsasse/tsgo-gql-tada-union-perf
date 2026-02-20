import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4503 } from "./fragment4503";
import type { FragmentToken4504 } from "./fragment4504";

export const FRAGMENT_4505 = gql(`
  fragment Fragment4505 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult4505 = ResultOf<typeof FRAGMENT_4505>;
type FragmentSelf4505 = NonNullable<FragmentResult4505>;

export type FragmentToken4505 =
  | FragmentSelf4505["__typename"]
  | FragmentSelf4505["typenameHint"] | FragmentToken4503 | FragmentToken4504;
