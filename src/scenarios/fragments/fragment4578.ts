import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4576 } from "./fragment4576";
import type { FragmentToken4577 } from "./fragment4577";

export const FRAGMENT_4578 = gql(`
  fragment Fragment4578 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult4578 = ResultOf<typeof FRAGMENT_4578>;
type FragmentSelf4578 = NonNullable<FragmentResult4578>;

export type FragmentToken4578 =
  | FragmentSelf4578["__typename"]
  | FragmentSelf4578["typenameHint"] | FragmentToken4576 | FragmentToken4577;
