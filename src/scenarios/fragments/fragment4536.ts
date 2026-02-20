import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4534 } from "./fragment4534";
import type { FragmentToken4535 } from "./fragment4535";

export const FRAGMENT_4536 = gql(`
  fragment Fragment4536 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult4536 = ResultOf<typeof FRAGMENT_4536>;
type FragmentSelf4536 = NonNullable<FragmentResult4536>;

export type FragmentToken4536 =
  | FragmentSelf4536["__typename"]
  | FragmentSelf4536["typenameHint"] | FragmentToken4534 | FragmentToken4535;
