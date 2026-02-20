import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4702 } from "./fragment4702";
import type { FragmentToken4703 } from "./fragment4703";

export const FRAGMENT_4704 = gql(`
  fragment Fragment4704 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult4704 = ResultOf<typeof FRAGMENT_4704>;
type FragmentSelf4704 = NonNullable<FragmentResult4704>;

export type FragmentToken4704 =
  | FragmentSelf4704["__typename"]
  | FragmentSelf4704["typenameHint"] | FragmentToken4702 | FragmentToken4703;
