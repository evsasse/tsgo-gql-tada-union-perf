import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4553 } from "./fragment4553";
import type { FragmentToken4554 } from "./fragment4554";

export const FRAGMENT_4555 = gql(`
  fragment Fragment4555 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult4555 = ResultOf<typeof FRAGMENT_4555>;
type FragmentSelf4555 = NonNullable<FragmentResult4555>;

export type FragmentToken4555 =
  | FragmentSelf4555["__typename"]
  | FragmentSelf4555["typenameHint"] | FragmentToken4553 | FragmentToken4554;
