import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4429 } from "./fragment4429";
import type { FragmentToken4430 } from "./fragment4430";

export const FRAGMENT_4431 = gql(`
  fragment Fragment4431 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult4431 = ResultOf<typeof FRAGMENT_4431>;
type FragmentSelf4431 = NonNullable<FragmentResult4431>;

export type FragmentToken4431 =
  | FragmentSelf4431["__typename"]
  | FragmentSelf4431["typenameHint"] | FragmentToken4429 | FragmentToken4430;
