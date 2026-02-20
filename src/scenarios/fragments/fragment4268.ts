import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4266 } from "./fragment4266";
import type { FragmentToken4267 } from "./fragment4267";

export const FRAGMENT_4268 = gql(`
  fragment Fragment4268 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult4268 = ResultOf<typeof FRAGMENT_4268>;
type FragmentSelf4268 = NonNullable<FragmentResult4268>;

export type FragmentToken4268 =
  | FragmentSelf4268["__typename"]
  | FragmentSelf4268["typenameHint"] | FragmentToken4266 | FragmentToken4267;
