import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4500 } from "./fragment4500";
import type { FragmentToken4501 } from "./fragment4501";

export const FRAGMENT_4502 = gql(`
  fragment Fragment4502 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult4502 = ResultOf<typeof FRAGMENT_4502>;
type FragmentSelf4502 = NonNullable<FragmentResult4502>;

export type FragmentToken4502 =
  | FragmentSelf4502["__typename"]
  | FragmentSelf4502["typenameHint"] | FragmentToken4500 | FragmentToken4501;
