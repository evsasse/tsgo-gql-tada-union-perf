import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4441 } from "./fragment4441";
import type { FragmentToken4442 } from "./fragment4442";

export const FRAGMENT_4443 = gql(`
  fragment Fragment4443 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult4443 = ResultOf<typeof FRAGMENT_4443>;
type FragmentSelf4443 = NonNullable<FragmentResult4443>;

export type FragmentToken4443 =
  | FragmentSelf4443["__typename"]
  | FragmentSelf4443["typenameHint"] | FragmentToken4441 | FragmentToken4442;
