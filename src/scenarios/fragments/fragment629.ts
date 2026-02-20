import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken627 } from "./fragment627";
import type { FragmentToken628 } from "./fragment628";

export const FRAGMENT_629 = gql(`
  fragment Fragment629 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult629 = ResultOf<typeof FRAGMENT_629>;
type FragmentSelf629 = NonNullable<FragmentResult629>;

export type FragmentToken629 =
  | FragmentSelf629["__typename"]
  | FragmentSelf629["typenameHint"] | FragmentToken627 | FragmentToken628;
