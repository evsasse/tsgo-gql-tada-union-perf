import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4512 } from "./fragment4512";
import type { FragmentToken4513 } from "./fragment4513";

export const FRAGMENT_4514 = gql(`
  fragment Fragment4514 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult4514 = ResultOf<typeof FRAGMENT_4514>;
type FragmentSelf4514 = NonNullable<FragmentResult4514>;

export type FragmentToken4514 =
  | FragmentSelf4514["__typename"]
  | FragmentSelf4514["typenameHint"] | FragmentToken4512 | FragmentToken4513;
