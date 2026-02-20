import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken990 } from "./fragment990";
import type { FragmentToken991 } from "./fragment991";

export const FRAGMENT_992 = gql(`
  fragment Fragment992 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult992 = ResultOf<typeof FRAGMENT_992>;
type FragmentSelf992 = NonNullable<FragmentResult992>;

export type FragmentToken992 =
  | FragmentSelf992["__typename"]
  | FragmentSelf992["typenameHint"] | FragmentToken990 | FragmentToken991;
