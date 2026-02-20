import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4729 } from "./fragment4729";
import type { FragmentToken4730 } from "./fragment4730";

export const FRAGMENT_4731 = gql(`
  fragment Fragment4731 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult4731 = ResultOf<typeof FRAGMENT_4731>;
type FragmentSelf4731 = NonNullable<FragmentResult4731>;

export type FragmentToken4731 =
  | FragmentSelf4731["__typename"]
  | FragmentSelf4731["typenameHint"] | FragmentToken4729 | FragmentToken4730;
