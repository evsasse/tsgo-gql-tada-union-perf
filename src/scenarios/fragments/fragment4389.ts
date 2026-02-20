import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4387 } from "./fragment4387";
import type { FragmentToken4388 } from "./fragment4388";

export const FRAGMENT_4389 = gql(`
  fragment Fragment4389 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult4389 = ResultOf<typeof FRAGMENT_4389>;
type FragmentSelf4389 = NonNullable<FragmentResult4389>;

export type FragmentToken4389 =
  | FragmentSelf4389["__typename"]
  | FragmentSelf4389["typenameHint"] | FragmentToken4387 | FragmentToken4388;
