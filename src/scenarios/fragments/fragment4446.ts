import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4444 } from "./fragment4444";
import type { FragmentToken4445 } from "./fragment4445";

export const FRAGMENT_4446 = gql(`
  fragment Fragment4446 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult4446 = ResultOf<typeof FRAGMENT_4446>;
type FragmentSelf4446 = NonNullable<FragmentResult4446>;

export type FragmentToken4446 =
  | FragmentSelf4446["__typename"]
  | FragmentSelf4446["typenameHint"] | FragmentToken4444 | FragmentToken4445;
