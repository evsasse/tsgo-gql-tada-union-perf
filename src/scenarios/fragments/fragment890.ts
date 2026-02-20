import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken888 } from "./fragment888";
import type { FragmentToken889 } from "./fragment889";

export const FRAGMENT_890 = gql(`
  fragment Fragment890 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult890 = ResultOf<typeof FRAGMENT_890>;
type FragmentSelf890 = NonNullable<FragmentResult890>;

export type FragmentToken890 =
  | FragmentSelf890["__typename"]
  | FragmentSelf890["typenameHint"] | FragmentToken888 | FragmentToken889;
