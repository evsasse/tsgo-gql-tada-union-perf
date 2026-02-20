import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken645 } from "./fragment645";
import type { FragmentToken646 } from "./fragment646";

export const FRAGMENT_647 = gql(`
  fragment Fragment647 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult647 = ResultOf<typeof FRAGMENT_647>;
type FragmentSelf647 = NonNullable<FragmentResult647>;

export type FragmentToken647 =
  | FragmentSelf647["__typename"]
  | FragmentSelf647["typenameHint"] | FragmentToken645 | FragmentToken646;
