import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4417 } from "./fragment4417";
import type { FragmentToken4418 } from "./fragment4418";

export const FRAGMENT_4419 = gql(`
  fragment Fragment4419 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult4419 = ResultOf<typeof FRAGMENT_4419>;
type FragmentSelf4419 = NonNullable<FragmentResult4419>;

export type FragmentToken4419 =
  | FragmentSelf4419["__typename"]
  | FragmentSelf4419["typenameHint"] | FragmentToken4417 | FragmentToken4418;
