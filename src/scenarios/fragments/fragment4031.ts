import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4029 } from "./fragment4029";
import type { FragmentToken4030 } from "./fragment4030";

export const FRAGMENT_4031 = gql(`
  fragment Fragment4031 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult4031 = ResultOf<typeof FRAGMENT_4031>;
type FragmentSelf4031 = NonNullable<FragmentResult4031>;

export type FragmentToken4031 =
  | FragmentSelf4031["__typename"]
  | FragmentSelf4031["typenameHint"] | FragmentToken4029 | FragmentToken4030;
